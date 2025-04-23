type BreadcrumbType = {
  [key: string]: {
    basePath: string;
    prefix: string;
    canBack: boolean;
    basePathAccessible: boolean;
    labels: { [key: string]: string };
  };
};

const breadcrumbMap: BreadcrumbType = {
  produtos: {
    basePath: "/products",
    canBack: false,
    basePathAccessible: false,
    prefix: "Produtos",
    labels: {
      produtos: "Produtos"
    }
  }
};

function isUuidOrId(url: string): boolean {
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  const idRegex = /^\d+$/;
  return uuidRegex.test(url) || idRegex.test(url);
}

type BreadcrumbLabelResult =
  | {
      baseUrl: string;
      canBack: boolean;
      basePathAccessible: boolean;
      url: string;
    }
  | undefined;

export const breadcrumbLabels = (key: string): BreadcrumbLabelResult => {
  for (const {
    basePath,
    prefix,
    canBack,
    basePathAccessible,
    labels
  } of Object.values(breadcrumbMap)) {
    if (key.startsWith(basePath)) {
      const subPath = key.replace(basePath, "").slice(1);

      if (labels[subPath]) {
        return {
          baseUrl: basePath,
          canBack,
          basePathAccessible,
          url: `${prefix}/${labels[subPath]}`
        };
      }

      const segments = subPath.split("/");
      const lastSegment = segments[segments.length - 1];

      if (isUuidOrId(lastSegment) && labels[`${segments[0]}/:id`]) {
        return {
          baseUrl: basePath,
          canBack,
          basePathAccessible,
          url: `${prefix}/${labels[`${segments[0]}/:id`]}`
        };
      }
    }
  }

  return undefined;
};
