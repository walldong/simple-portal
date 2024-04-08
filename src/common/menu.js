import { BUSINESS_ROUTES } from "./routers";
import { Link } from "react-router-dom";


const getLabel = (item) => <Link to={item.path}>{item.name}</Link>

export const menus = [
  {
      label: getLabel(BUSINESS_ROUTES.HOME),
      key: BUSINESS_ROUTES.HOME.path,
    },
    {
      label: getLabel(BUSINESS_ROUTES.PRODUCT),
      key: BUSINESS_ROUTES.PRODUCT.path
    },
    {
      label: getLabel(BUSINESS_ROUTES.CONTACT),
      key: BUSINESS_ROUTES.CONTACT.path,
    },
    {
      label: getLabel(BUSINESS_ROUTES.PROFILE),
      key: BUSINESS_ROUTES.PROFILE.path
    },
];




