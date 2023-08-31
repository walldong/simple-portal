import { BUSINESS_ROUTES } from "./routes";
import { Link } from "react-router-dom";


const getLabel = (item) => <Link to={item.path}>{item.name}</Link>

export const menus = [
    {
      label: getLabel(BUSINESS_ROUTES.HOME),
      key: BUSINESS_ROUTES.HOME.path,
    },
    {
      label: getLabel(BUSINESS_ROUTES.Content),
      key: BUSINESS_ROUTES.Content.path
    },
    {
      label: getLabel(BUSINESS_ROUTES.Content2),
      key: BUSINESS_ROUTES.Content2.path,
    }
  ];