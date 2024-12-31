const HOME = "/website/";
const ABOUT_US = "/website/about";
const RUSH = "/website/rush";
const MEMBERS = "/website/members";
const CONTACT_US = "/website/contact";

export const ROUTES = {
  HOME,
  ABOUT_US,
  RUSH,
  MEMBERS,
  CONTACT_US,
};

export const NAVBAR_ROUTES = [
  { route: ROUTES.ABOUT_US, text: "About Us" },
  { route: ROUTES.RUSH, text: "Rush" },
  { route: ROUTES.MEMBERS, text: "Members" },
  { route: ROUTES.CONTACT_US, text: "Contact" },
];
