// document types
import frontpage from './documents/frontpage'
import aboutus from './documents/aboutus'
import art from './documents/art'
// import booking from './documents/booking'
import serviceList from './documents/serviceList'
import service from './documents/service'
import person from './documents/person'
import settings from './documents/settings'

// Object types
import objImage from './objects/objImage'
import rte from './objects/rte'
import imageText from './objects/imageText'
import intro from './objects/intro'
import seo from './objects/seo'
import footer from './objects/footer'
import news from './objects/news'

// Grid setup
import grid from './grid/grid'
import gridRTE from './grid/gridRTE'
import gridIframe from './grid/gridIframe'
import gridImage from './grid/gridImage'
import gridImageText from './grid/gridImageText'
import gridPersons from './grid/gridPersons'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types
export const schemaTypes = [
    // The following are document types which will appear
    // in the studio.
    frontpage,
    aboutus,
    art,
    // booking,
    person,
    serviceList,
    service,
    settings,

    // Grid setup
    grid,
    gridRTE,
    gridIframe,
    gridImage,
    gridImageText,
    gridPersons,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    objImage,
    rte,
    imageText,
    intro,
    seo,
    footer,
    news
]

