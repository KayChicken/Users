import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={290}
        height={50}
        viewBox="0 0 290 50"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="22" cy="22" r="22" />
        <rect x="56" y="1" rx="0" ry="0" width="125" height="23" />
        <rect x="56" y="29" rx="0" ry="0" width="125" height="13" />
    </ContentLoader>
)

export default Skeleton