/**
 * title: 基础用法
 * description: 图片懒加载
 */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useIntersection } from 'use-hooks';
interface IProps {
  src: string;
}
async function fetchPic() {
  const res = await axios.get(
    'https://api.vvhan.com/api/wallpaper/acg?type=json',
  );
  return res.data.url;
}
const LazyLoadImage = ({ src }: IProps) => {
  const imgRef = useIntersection<HTMLImageElement>((entry, observer) => {
    if (entry.isIntersecting) {
      const src = imgRef.current.dataset.src;
      if (src) {
        imgRef.current.src = src;
        observer.unobserve(imgRef.current);
      }
    }
  });

  return (
    <img
      ref={imgRef}
      data-src={src}
      className="lazy"
      style={{ width: '45%', height: '40%' }}
    />
  );
};
const Demo = () => {
  const [pic, setPic] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      const execArr: any = [];
      for (let i = 0; i < 16; i++) {
        execArr.push(fetchPic());
      }
      const res = await Promise.all(execArr);
      setPic(res);
    })();
  }, []);
  return (
    <div
      style={{
        height: '600px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        rowGap: '10px',
        overflow: 'auto',
      }}
    >
      {pic.map((item) => (
        <LazyLoadImage key={item} src={item} />
      ))}
    </div>
  );
};
export default Demo;
