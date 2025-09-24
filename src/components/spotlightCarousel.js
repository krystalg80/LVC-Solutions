import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/vecteezy_black-and-gray-background-vector-illustration-lighting_6417811-1.jpg';
import spotlightLogo from '../assets/spotlight-media.png'
function SpotLightCarousel() {


    return (
        <Carousel className='gradient-background-color bg-black'>
            <Carousel.Item className='spotlight-carousel-scroll' style={{ marginBottom: '0px' }}>
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', height: '100%', minHeight: '275px', opacity: '0' }} src={ExampleCarouselImage} text="First slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <div className='d-flex flex-row h-30'>
                        <div style={{width:'30%', maxHeight:'150px',minWidth:'120px', paddingRight:'5%'}}>
                            <img alt='spotlight media logo' className='spotlight-media-logo-slide1' src={spotlightLogo} />
                        </div>
                        <div className='mw-80 align-content-end'>
                            <h2 style={{ color: 'white', fontWeight: 'bolder', fontSize: 'clamp(30px, 2.5vmax, 60px)', marginBottom:'0'}}>PR, Branding & Digital Growth</h2>
                        </div>
                    </div>
                    <p style={{ color: 'white', paddingTop: '5.5vw', textAlign: 'center', fontSize: 'clamp(17px, 2vmax, 45px)', fontWeight: 'normal' }}>
                        From <b style={{ color: 'white' }}>Forbes features to viral digital campaigns</b>, we help founders, CEOs, and startups <b style={{ color: 'white' }}>get seen,</b>
                        <br />
                        <b style={{ color: 'white' }}>get trusted, and get remembered.</b>
                        <br />
                        We don’t just promote — <b style={{ color: 'white' }}>we spotlight your brand and fuel your growth.</b></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='spotlight-carousel-scroll' style={{ overflow: 'auto' }} >
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', minHeight: '275px', opacity: '0' }} src={ExampleCarouselImage} text="Second slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <h2 style={{ marginLeft: '35px', color: 'white', fontWeight: 'bolder', fontSize: 'clamp(32px, 2.5vmax, 60px)', paddingBottom: '1vmax' }}>Services</h2>
                    <div className='spotlight-carousel-services'>
                        <div className='spotlight-slide2-container'>
                            <div className='spotlight-slide2-cards'>
                                <ul>
                                    <h2
                                        style={{
                                            textAlign: 'start',
                                            fontWeight: 'bold',
                                            textDecoration: 'underline',
                                            textUnderlineOffset: '.3rem',
                                            fontSize: 'clamp(25px, 2vmax, 40px)'
                                        }}>PR & Media Features</h2>
                                    <li className='spotlight-slide2-bulletpoints'>
                                        Guaranteed placements in <b style={{ color: 'white' }}>
                                            Forbes, Entrepreneur, Yahoo Finance, TechCrunch, Medium
                                            & more
                                        </b>

                                    </li>
                                    <li className='spotlight-slide2-bulletpoints'>
                                        Build global credibility fast
                                    </li>
                                </ul>
                            </div>
                            <div className='spotlight-slide2-cards'>
                                <ul>
                                    <h2
                                        style={{
                                            textAlign: 'start',
                                            fontWeight: 'bold',
                                            textDecoration: 'underline',
                                            textUnderlineOffset: '.3rem',
                                            fontSize: 'clamp(25px, 2vmax, 40px)'
                                        }}>Personal Branding for Founders & CEOs</h2>
                                    <li className='spotlight-slide2-bulletpoints'>
                                        Founder interviews, storytelling, podcasts
                                    </li>
                                    <li className='spotlight-slide2-bulletpoints'>
                                        Build authority on<b style={{ color: 'white' }}> LinkedIn, X, Instagram</b>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='spotlight-slide2-container'>
                            <div className='spotlight-slide2-cards'>
                                <ul>
                                    <h2
                                        style={{
                                            textAlign: 'start',
                                            fontWeight: 'bold',
                                            textDecoration: 'underline',
                                            textUnderlineOffset: '.3rem',
                                            fontSize: 'clamp(25px, 2vmax, 40px)'
                                        }}>Startup & Product Visibility</h2>
                                    <li className='spotlight-slide2-bulletpoints'>
                                        Launch campaigns for SaaS & AI startups
                                    </li>
                                    <li className='spotlight-slide2-bulletpoints'>
                                        Attract <b style={{ color: 'white' }}> investors + customers</b> with the right buzz
                                    </li>
                                </ul>
                            </div>
                            <div className='spotlight-slide2-cards'>
                                <ul>
                                    <h2
                                        style={{
                                            textAlign: 'start',
                                            fontWeight: 'bold',
                                            textDecoration: 'underline',
                                            textUnderlineOffset: '.3rem',
                                            fontSize: 'clamp(25px, 2vmax, 40px)'
                                        }}>Digital Marketing Excellence</h2>
                                    <li className='spotlight-slide2-bulletpoints'>
                                        <b style={{ color: 'white' }}>Social Media Growth</b> (LinkedIn, X, Insta)
                                    </li>
                                    <li className='spotlight-slide2-bulletpoints'>
                                        SEO, Paid Ads, Content Marketing
                                    </li>
                                    <li className='spotlight-slide2-bulletpoints'>
                                        Performance campaigns with<b style={{ color: 'white' }}> ROI tracking</b>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='spotlight-carousel-scroll' style={{ overflow: 'auto' }}>
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', minHeight: '260px', opacity: '0' }} src={ExampleCarouselImage} text="Third slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <h2 style={{ color: 'white', fontWeight: 'bolder', fontSize: 'clamp(32px, 2.5vmax, 60px)'}}>Why Choose LVC Spotlight Media?</h2>
                    <div className='spotlight-slide2-cards'>
                        <ul className='ul-list-padding-carousel' style={{ paddingBottom: '', marginTop: '' }}>
                            <li style={{ fontSize: 'clamp(17, 1.5vmax, 3rem)' }} className='spotlight-slide2-bulletpoints'>
                                <b style={{ color: 'white' }}> Founder-First Approach</b> → We put leaders in the spotlight, not just products
                            </li>
                            <li style={{ fontSize: 'clamp(17, 1.5vmax, 3rem)' }} className='spotlight-slide2-bulletpoints'>
                                <b style={{ color: 'white' }}> Guaranteed Media Features </b>→ Direct partnerships with global platforms
                            </li>
                            <li style={{ fontSize: 'clamp(17, 1.5vmax, 3rem)' }} className='spotlight-slide2-bulletpoints'>
                                <b style={{ color: 'white' }}> Integrated Growth </b> → PR + Branding + Digital Marketing in one
                            </li>
                            <li style={{ fontSize: 'clamp(17, 1.5vmax, 3rem)' }} className='spotlight-slide2-bulletpoints'>
                                <b style={{ color: 'white' }}> Tech & Startup Focus </b>→ Specialized in SaaS, AI, and innovation-driven businesses
                            </li>
                            <li style={{ fontSize: 'clamp(17, 1.5vmax, 3rem)' }} className='spotlight-slide2-bulletpoints'>
                                <b style={{ color: 'white' }}> Affordable Packages </b>→ Growth plans that scale with your journey
                            </li>
                        </ul>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='spotlight-carousel-scroll' style={{ overflow: 'auto' }}>
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', minHeight: '275px', opacity: '0' }} src={ExampleCarouselImage} text="Fourth slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <h2 style={{ color: 'white', fontWeight: 'bolder', fontSize: 'clamp(32px, 2.5vmax, 60px)', textAlign: 'center' }}>Competitor Comparison</h2>
                    <p style={{ color: 'white', fontSize: 'clamp(13px, 1vmax, 26px)', textAlign: 'center' }}>Why LVC Spotlight Media Beats the Rest</p>
                    <table className='spotlight-slide4-grid'>
                        <thead style={{ width: '100%', height: '30%' }}>
                            <tr>
                                <th className='spotlight-grid-col' scope="col">Feature</th>
                                <th className='spotlight-grid-col' scope="col">LVC Spotlight Media</th>
                                <th className='spotlight-grid-col' scope="col">Traditional PR Agencies</th>
                                <th className='spotlight-grid-col' scope="col">Generic Digital Marketing Firms</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b style={{ color: 'white' }}>PR & Media Placements</b></th>
                                <td className='spotlight-graph-cells'>✅ Guaranteed global features(Forbes,Entrepreneur,Yahoo, etc.)</td>
                                <td className='spotlight-graph-cells'>❌ Pitched-based, no guarantees</td>
                                <td className='spotlight-graph-cells'>❌ Not offered</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b style={{ color: 'white' }}>Founder Branding</b></th>
                                <td className='spotlight-graph-cells'>✅ Personal storytelling, CEO spotlight, LinkedIn growth</td>
                                <td className='spotlight-graph-cells'>❌ Focus only on companies</td>
                                <td className='spotlight-graph-cells'>❌ Focus on ads, not people</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b style={{ color: 'white' }}>Startup, SaaS Focus</b></th>
                                <td className='spotlight-graph-cells'>✅ Tailored for AI, SaaS & startups</td>
                                <td className='spotlight-graph-cells'>❌ Industry-generic</td>
                                <td className='spotlight-graph-cells'>❌ Campaign-based only</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b style={{ color: 'white' }}>Digital Marketing</b></th>
                                <td className='spotlight-graph-cells'>✅ SEO, Paid Ads, Social Media + ROI tracking</td>
                                <td className='spotlight-graph-cells'>❌ Not Offered</td>
                                <td className='spotlight-graph-cells'>✅ Yes, but no PR credibility</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b style={{ color: 'white' }}>Speed of Results</b></th>
                                <td className='spotlight-graph-cells'>✅ 2-6 weeks for media + campaigns</td>
                                <td className='spotlight-graph-cells'>❌3-6 months or more</td>
                                <td className='spotlight-graph-cells'>⚠️Dependent on ad spend</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b style={{ color: 'white' }}>Pricing</b></th>
                                <td className='spotlight-graph-cells'>✅ Flexible, growth-friendly packages</td>
                                <td className='spotlight-graph-cells'>❌ Expensive retainers ($5k-$20k/month)</td>
                                <td className='spotlight-graph-cells'>⚠️Ad-heavy, recurring costs</td>
                            </tr>
                        </tbody>
                    </table>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='spotlight-carousel-scroll'>
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', minHeight: '275px', opacity: '0' }} src={ExampleCarouselImage} text="fifth slide" />
                <Carousel.Caption className='spotlight-carousel-items-container d-flex justify-content-center align-items-center' style={{overflow:'hidden'}}>
                    <div className='spotlight-logo-slide'>
                        <img className='img-fluid d-block mx-auto' alt='spotlight media logo' style={{ maxWidth: '100%', maxHeight: '400px', minHeight:'100px', minWidth:'100px'}} src={spotlightLogo} />
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='spotlight-carousel-scroll'>
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', minHeight: '275px', opacity: '0' }} src={ExampleCarouselImage} text="sixth slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <div className='spotlight-slide5'>
                        {/* <h1 style={{ color: 'white', fontWeight: 'bolder', fontSize: 'clamp(10px, 3vmax, 80px)' }}>Call-to-Action</h1> */}
                        <div>
                            <h1 style={{ color: 'white', fontWeight: 'bolder', fontSize: 'clamp(10px, 3vmax, 80px)', alignItems: 'center' }}>“From Media Spotlight to Digital Growth – We’ve Got You Covered.”</h1>
                            <a href="https://www.lvcspotlightmedia.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="btn spotlight-media-button">
                                Discover Spotlight Media
                            </a>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
    );
}

export default SpotLightCarousel;
