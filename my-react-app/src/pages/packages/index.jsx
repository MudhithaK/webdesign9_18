import React from 'react'
import Header from '../../Components/header';
import "./packegess.css";

const Packages = () => {
  return (
    <>
    <Header/>
    <body >
        <div>
            <h1>PACKAGES</h1>
        </div>
        
        <div className='packages'>
          <div className='package'>
            <h3>Venue</h3>
            <p>
              There are Star ratings for Hotels in Sri Lanka. 
                   Select the venue as you like and check the cost for your selection.   
            </p>
            <button href="#">Click</button>
          </div>


          <div className='package'>
            <h3>Photography</h3>
            <p>
              Discover the creativity of wedding photography with our specially designed packages,
              which are made to accommodate a wide range of tastes. The Bronze, Silver, Gold,
              and Platinum packages are revealed; each one acts as a standard, capturing the
              current styles in Sri Lanka’s thriving wedding photography market.
            </p>
            <button href="#">Click</button>
          </div>


          <div className='package'>
            <h3>Decoration</h3>
            <p>
              The size and location of the wedding, the degree of formality, and the particular
              decorations that are selected are just a few of the variables that can significantly
              affect the typical cost of wedding decorations in Sri Lanka.
              We can have theme based decorations according to the personal desires.
            </p>
            <button href="#">Click</button>
          </div>

          <div className='package'>
            <h3>Entertainment</h3>
            <p>
              Planning a wedding involves careful consideration of various elements,
              and one significant aspect is the allocation of budget for entertainment.
              The cost of wedding entertainment encompasses a range of elements,
              including hiring a DJ or live band, organizing sound and
              lighting equipment.
            </p>
            <button href="#">Click</button>
          </div>

          <div className='package'>
            <h3>Wedding Cake</h3>
            <p>
              Sri Lankan wedding cakes, which represent sweetness and wealth in the relationship,
              are an essential component of the happy festivities. The intricate patterns on
              these cakes are well known, and they frequently pay homage to the island’s rich
              cultural past. Brilliant hues, dexterous detailing, and symbolic components such
              as peacock motifs or conventional Kandyan patterns define traditional wedding
              cakes from Sri Lanka
            </p>
            <button href="#">Click</button>
          </div>

          <div className='package'>
            <h3>Wedding dress and Accessory</h3>
            <p>
              Renowned International Designer: - Exclusive designs, intricate
              details, high-quality fabrics, multiple fittings.
              Established Sri Lankan Designer: - Luxurious fabrics, hand-stitching, traditional motifs, personalized experience.
              High-End Bridal Boutique: - Curated collection of renowned
              designer gowns, personalized service.
              Vintage or Antique Dresses: - Unique and one-of-a-kind pieces,
              historical value, condition variability.
            </p>
            <button href="#">Click</button>
          </div>

          <div className='package'>
            <h3>Bridal Hair and Makeup</h3>
            <p>
              The budget for wedding makeup in Sri Lanka can vary based on
              several factors, including the level of expertise of the makeup artist,
              the products used, and the complexity of the desired look. Here’s a
              breakdown of wedding makeup budget ranges for different categories:
                    
            </p>
            <button href="#">Click</button>
          </div>

        </div>



    </body>
    </>
  )
}
export default Packages;