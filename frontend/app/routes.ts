import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("index.tsx"),
  route("whoami", "routes/whoami/whoami.tsx"),
] satisfies RouteConfig;
