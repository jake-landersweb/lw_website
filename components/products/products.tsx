import ImageWrapper from "../misc/image"
import Section from "../misc/section"
import CalorieMeItem from "./calorie_me"
import CheetahItem from "./cheetah"
import CrosscheckItem from "./crosscheck"

const Products = () => {
    return <>
        <Section props={{
            title: "",
            content: <div className="space-y-32">
                <CrosscheckItem />
                <CheetahItem />
                <CalorieMeItem />
            </div>,
            hasMargins: undefined,
            hasMaxWdith: undefined
        }} />
    </>
}

export default Products