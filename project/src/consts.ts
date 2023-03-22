export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer/',
  PageNotFound = '/404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const DEFAULT_LOCATION = CITIES[3];

export const sortType = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const DEFAULT_SORT = sortType[0];

export const stars = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

export const LeafletParameters = {
  TILE_LAYER: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};


export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';

export const SIMILAR_AD_COUNT = 10;

export const SIMILAR_AD_OFFERS_COUNT = 3;

export const STAR_NAME = 'rating';
