/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    swcMinify:true ,
    async rewrites(){
        return [
            {
                // /makeup 으로 시작하면 무조건 destination 주소의 정보를 가져올 수 있다. 
                source : "/makeup/:path*",
                destination : "https://makeup-api.herokuapp.com/api/:path*"
            }
        ];
    }
};



export default nextConfig;
