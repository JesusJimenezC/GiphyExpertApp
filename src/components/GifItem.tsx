import { ReactElement } from "react";

interface GifItemProps {
  title: string;
  url: string;
}

export const GifItem = ({ title, url }: GifItemProps): ReactElement => (
  <div className="card">
    <img alt={title} src={url} />
    <p>{title}</p>
  </div>
);
