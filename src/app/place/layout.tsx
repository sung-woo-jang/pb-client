'use client';
import React from 'react';
import useGetAllMyPlacePick from '@/api/place-pick/getAllMyPlacePick';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useGetAllMyPlacePick();
  return children;
}
