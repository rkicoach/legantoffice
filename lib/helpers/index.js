// accepts a string,
// returns a string with the first letter of each word capitalized
export function titleCase(str) {
  const split = str.toLowerCase().split(' ');
  for (let i = 0; i < split.length; i += 1) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
  }

  return split.join(' ');
}

// accepts url-formatted category strings
// returns a pretty string
export function catName(cat) {
  if (!cat) {
    return '';
  }

  return titleCase(cat.replace(/-/g, ' '));
}

// accepts url-formatted category and subcategory strings
// returns a formatted hierarchy for algolia's searchparameters
export function catString(cat, subcat) {
  if (!cat) {
    return '';
  }

  if (!subcat) {
    return catName(cat);
  }

  return `${catName(cat)} > ${catName(subcat)}`;
}

// accepts category name string with spaces
// returns a lower-case string with dashes, to use as part of a category url
export function catUrl(cat) {
  return cat.replace(/\s+/g, '-').toLowerCase();
}

// accepts a number, returns a formatted price with dollar sign
export function priceString(num) {
  const sanitized = num.toFixed(2).toLocaleString();
  return `$${sanitized.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}`;
}

// convert a string from dashed to camel case
export const toCamelCase = (str) => {
  const camel = str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  return camel;
};
