import Link from "next/link";

interface Props {
    icon: string;
    size?: number;
    link?: string;
    title?: string
    hideTitleOnMobil?: boolean;
    badge?: number;
}

export function IconBox({icon, size = 22, link, title, hideTitleOnMobil = false, badge = 0}: Props) {
    return (
        <>

            { 
                badge ?

                    <div className="relative">
                        <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
                        <Link href={link ?? '#'}><i className={ ` ${icon} text-[${size}px]`}></i></Link>
                    </div>
                :

                <Link href={link ?? '#'}><i className={ ` ${icon} text-[${size}px]`}></i></Link>

            }



            { title && <div className={`${hideTitleOnMobil ? `hidden xl:inline-block` : `inline-block`} text-medium text-gray-500 font-lato`}>{title}</div>}
        </>
    );
}

