import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression, serveStaticContent,
} from "./common";
import { handleApiDocs } from "./apiDocs";

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleApiDocs,
  serveStaticContent,
];
