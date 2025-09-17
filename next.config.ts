import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pinimg.com"], // allow Pinterest images
  },
};

module.exports = nextConfig;

