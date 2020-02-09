import * as React from 'react'
import { graphql} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export const query = graphql`
  query {
    mobileHero: file(relativePath: { eq: "mobileHero.jpg" }) {
      childImageSharp {
        fluid(maxWidth:800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopHero: file(relativePath: { eq: "desktopHero.png" }) {
      childImageSharp {
        fluid(maxWidth:1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({data}) => {

  const sources = [
    {
      ...data.mobileHero.childImageSharp.fluid,
      media: `(max-width: 767px)`,
    },
    {
      ...data.desktopHero.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <div>

    <BackgroundImage fluid={sources} style={{width:'100vw',
                                            height:'500px',
                                            backgroundPosition: 'left top'}}/>


    </div>

  )
}
