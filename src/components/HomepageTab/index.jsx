import { Button } from "components/Button";
import { Text } from "components/Text";

export default function HomepageTab({
    buttonText1 = "Object Collection",
    text1 = "Lifestyle Screens",
    text2 = "Monitors",
    text3,
    text4,
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex md:flex-col items-center gap-[30px]`}>

            <Button color="deep_orange_A700" size="4xl" variant="outline" shape="square" className="w-full flex-1 tracking-[1.40px] md:self-stretch">
                {buttonText1}
              </Button>
              
              <div className="flex px-2.5 pb-2.5 pt-[13px]">
                <Text size="2xl" as="p" className="tracking-[1.40px]">
                    {text1}
                </Text>
              </div>
              <div className="flex px-2.5 pb-3 pt-[11px]">
                <Text size="2xl" as="p" className="tracking-[1.40px]">
                    {text2}
                </Text>
              </div>              
              <div className="flex px-2.5 pb-2.5 pt-[11px]">
                {!!text3 ? (

                    <Text size="2xl" as="p" className="tracking-[1.40px]">
                    {text3}
                </Text>
                ):null}
              </div>
              <div className="flex px-2.5 pb-[11px] pt-3">
                {!!text4 ? (

                    <Text size="2xl" as="p" className="tracking-[1.40px]">
                    {text4}
                </Text>
                ):null}
              </div>
        </div>
    );
}