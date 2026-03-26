type LoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function UmbracoMediaLoader({ src, width, quality }: LoaderProps): string {
  const baseUrl = process.env.NEXT_PUBLIC_UMBRACO_BASE_URL ?? "";
  const isSvg = src.toLowerCase().endsWith(".svg");

  if (isSvg) {
    return `${baseUrl}${src}`;
  }

  return `${baseUrl}${src}?w=${width}&q=${quality ?? 75}`;
}