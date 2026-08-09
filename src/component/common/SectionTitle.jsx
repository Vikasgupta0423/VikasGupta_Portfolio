const SectionTitle = ({

    title,

    subtitle

}) => {

    return (

        <div className="mb-16">

            <h2 className="text-5xl font-bold">

                {title}

            </h2>

            <p className="text-gray-400 mt-4">

                {subtitle}

            </p>

        </div>

    );

};

export default SectionTitle;