import {PartnerWrapper,PartnerIcon} from './PartnerComponent'
import Data from '../../Data/Data'
import Container from '@mui/material/Container';

function Partner() {
    return (
       <Container>
          
           <PartnerWrapper>
           {Data.partner.map((element)=>
                <PartnerIcon src={element.img}/>
            )}
            </PartnerWrapper>
         
           
       </Container>
    )
}

export default Partner
