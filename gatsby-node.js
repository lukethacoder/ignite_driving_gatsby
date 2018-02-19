// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

//  // You can delete this file if you're not using it

//  const path = require('path');

//  exports.createPages = ({boundActionCreators, graphql}) => {
//      const {createPage} = boundActionCreators;
//      const postTemplate = path.resolve('src/pages/whatweoffer.js');
//      /* put sorting inside brackets (after allMarkdownRemark)*/
//     return graphql(`{
//         allMarkdownRemark {
//             edges {
//                 node {
//                     html
//                     id
//                     frontmatter {
//                         path
//                         title
//                     }
//                 }
//             }
//         }
//     }`)
//     .then(res => {
//         if(res.errors) {
//             return Promise.reject(res.errors);
//         }
//         /* */
//         res.data.allMarkdownRemark.edges.forEach( ({node}) => {
//             createpage({
//                 path: node.frontmatter.path,
//                 component: postTemplate
//             })
//         })
//     })
//  }

// exports.sourceNodes = async ({ boundActionCreators }) => {
//     const { createNode } = boundActionCreators;

//     const data = await fetch("https://www.instagram.com/ignitedriving/?__a=1");

//     dat.forEach(datum => createNode(processDatum(datum)));

//     return;
// }