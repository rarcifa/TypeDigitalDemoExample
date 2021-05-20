/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')


/* exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions
    return new Promise((resolve, reject)  => {
        // const blogPostTemplate = path.resolve('src/templates/blog-post.js')
        // const subpageTemplate = path.resolve('src/templates/subpage.js')
        resolve(
             graphql(`
                {
                    allContentfulPageBlogPost (limit:100) {
                        edges { 
                            node {
                                id
                                slug
                            }
                        }
                    }
                    allContentfulPageSubpage (limit:100) {
                        edges {
                            node {
                                internalName
                                slug
                                shortDescription {
                                    shortDescription
                                    childMarkdownRemark {
                                    excerpt(pruneLength: 40)
                                    }
                                }
                            }
                        }
                    }
                }
            `).then((result) => {
                if (result.errors) {
                    reject(result.errors)
                }
                /* Blog-posts
                result.data.allContentfulPageBlogPost.edges.forEach((edge) => {
                    createPage ({
                        path: "news/" + edge.node.slug,
                        component: blogPostTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                }) */
                /* Subpages
                result.data.allContentfulPageSubpage.edges.forEach((edge) => {
                    createPage ({
                        path: edge.node.slug,
                        component: subpageTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                }) 
                return
            })
        )
    })
} */
