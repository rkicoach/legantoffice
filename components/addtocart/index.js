
import AddYourLogo from './addyourlogo';
import ContinueOrCheckout from './continueOrCheckout';
import Debosing from './debbosing';
import Fullcolor from './fullcolor';
import Personalize from './personalize';
const AddToCartModals = ({logoState, close, debosState, FullcolorState, PersonalizeState, data, onImageDrop,dropImageName, dropImage, ItemInternalId,cartCount, storeDisplayName, debossSetupId, uvSetupId, imprintOptions, dropImageUrl,itemAdded,gotocart, ForLuggage})=>(
    <div>
        <AddYourLogo open={logoState} close={close} imgUrl={data} />
	<ContinueOrCheckout open={itemAdded} close={close} gotocart={gotocart}/>
        <Debosing ForLuggage={ForLuggage} open={debosState} close={close} imgUrl={data} onImageDrop={onImageDrop} dropImageName = {dropImageName}  dropImage={dropImage}  ItemInternalId={ItemInternalId} cartCount={cartCount} storeDisplayName={storeDisplayName} debossId={debossSetupId} dropImageUrl={dropImageUrl} />
        <Fullcolor open={FullcolorState} close={close} imgUrl={data} onImageDrop={onImageDrop} dropImageName = {dropImageName} dropImage={dropImage} ItemInternalId={ItemInternalId} cartCount={cartCount} storeDisplayName={storeDisplayName} uvId={uvSetupId} dropImageUrl={dropImageUrl}/>
        <Personalize open={PersonalizeState} close={close} imgUrl={data} onImageDrop={onImageDrop} dropImageName = {dropImageName} dropImage={dropImage} ItemInternalId={ItemInternalId} cartCount={cartCount}  storeDisplayName={storeDisplayName} imprintRadioOptions={imprintOptions} dropImageUrl={dropImageUrl} />
    </div>
)

export default AddToCartModals
