import { AboutSection, Community, Contact, IntroSection } from './sections';
import dynamic from 'next/dynamic';

export default function Homepage() {
  const ProductsSectionLazy = dynamic(() => import('./sections/products/ProductsSection'), {
    ssr: true
  });
  const UsefulMaterialsLazy = dynamic(() => import('./sections/materials/Materials'), {
    ssr: true
  });
  const TeamLazy = dynamic(() => import('./sections/team/Team'), {
    ssr: true
  });
  const TestimonialsLazy = dynamic(() => import('./sections/testimonials/Testimonials'), {
    ssr: false
  });

  return (
    <>
      <IntroSection />
      <AboutSection />
      <ProductsSectionLazy />
      <Community />
      {/*<UsefulMaterialsLazy />*/}
      <TeamLazy />
      <TestimonialsLazy />
      <Contact />
    </>
  );
}
