import React from 'react'
import img from './../assets/Home/img.png'
import rightarrow from './../assets/Home/arrow-right-grey.png'


function ArticleBox() {
  return (
    <div className='w-full h-full flex flex-col'>
        <img src={img} />
        <span className='text-[#23262F] text-lg font-semibold py-3'>7 ways to decor your home</span>
        <p className='flex w-max p-0 gap-1 cursor-pointer border-b-[1px] border-b-[#141718]'>
            <span className='text-[14px] w-max font-semibold whitespace-nowrap text-[#141718] '>More Articles</span>
            <img src={rightarrow} />
        </p>
    </div>
  )
}

export default ArticleBox