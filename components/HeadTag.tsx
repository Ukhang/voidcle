import Head from "next/head";

// Props Type
type HeadTagProps = {
    title: string,
    des: string,
    kew: string,
    auth: string
};

const HeadTag = ({title, des, kew, auth}: HeadTagProps) => {
    return (
       <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content={des}/>
            <meta name="keywords" content={kew}/>
            <meta name="author" content={auth}/>
            <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
            <title> {title} </title>
       </Head>
    )
}

export default HeadTag;