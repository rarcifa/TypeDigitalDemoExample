import React from "react"

/*  Main Skeleton */
const SectionTypeI = sections => {
    // Section Props
    let section = sections.sections.data.contentfulLandingPage.sections;
    return (
        <>
            {/*!-- Section Type I and II */}
            {section.map(i =>
                <section style={i.styling.style.css} className="section-green m-auto-0">
                    <div key={i.name} className="container m-auto-0 space-header">

                        {/* Section ID */}
                        <div className="container">
                            <h3 className="h3">{i.name}</h3>
                        </div>

                        {/* Tagline */}
                        <div className="container">
                            {console.log(i.cta)}
                            <h1 className="h1">{i.tagline}</h1>
                        </div>

                        {/* Image Fallback for Section I */}
                        {i.backgroundImage
                            ?
                            <img src={i.backgroundImage.file.url} alt={i.name} />
                            :
                            <></>
                        }

                        {/* Logo Fallback for Section II */}
                        {i.logos
                            ?
                            <div className="container">
                                <div className="row">
                                    {i.logos.map(l =>
                                        <div className={"col-2 pb-4 m-auto-0 py-5"}>
                                            <img src={l.file.url} alt={"Logo"} style={{ width: "100px", height: "100px", filter: "invert(100%" }} />
                                        </div>
                                    )}
                                </div>
                            </div>
                            :
                            <></>
                        }

                        {/* CTA Fallback */}
                        {i.cta
                            ?
                            i.cta.map(c =>
                            <a href="#" type="button" className="btn btn-main mt-4 mr-3"><strong>{c.name}</strong></a>
                            )
                            :
                            <></>
                        }
                    </div>
                </section>
            )}
        </>

    )
}

export default SectionTypeI