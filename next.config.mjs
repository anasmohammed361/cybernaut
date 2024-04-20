/** @type {import("next").NextConfig} */
const config = {
    webpack: (config) => {
      config.resolve.alias.canvas = false;
      return config;
    },
    transpilePackages: ["lucide-react", "zod"],
    images: {
      remotePatterns: [
        {
          hostname:
            "anasmohammed361-cybernaut-lms-coursebucket10d5ca16-tjiyvnhyrug9.s3.ap-south-1.amazonaws.com",
            
          // pathname:'/cdn/**',
          protocol: "https",
        },
        {
          hostname:
            "images.unsplash.com",
            
          // pathname:'/cdn/**',
          protocol: "https",
        },
        {
          hostname:
            "picsum.photos",
            
          // pathname:'/cdn/**',
          protocol: "https",
        },
      ],
    },
  };
  
  export default config;
  