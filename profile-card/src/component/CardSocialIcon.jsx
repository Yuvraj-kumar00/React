const CardSocialIcon = ({ social }) => {
    return (
        <div className="flex items-center justify-center gap-4">

            {
                social.map((elem, idx) => {
                    const Icon = elem.icon;
                    const color = elem.color;
                    
                    return (
                        <div key={idx} style={{backgroundColor: color}} className=" w-fit p-1 rounded-full text-sm flex items-center justify-center">
                            <Icon className="text-white" />
                        </div>)

                })
            }
        </div>
    )
}

export default CardSocialIcon
