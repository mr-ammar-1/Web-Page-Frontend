import React from 'react'

const TechandFram = () => {
  return (
    <div className='my-16'>

    <h1 className='text-center w-full lg:text-4xl text-3xl font-bold '><span className='text-blue-600'> Technologies </span>& Frameworks </h1>
      
      <div className=' flex flex-wrap items-center mx-auto w-[86%] justify-between mt-16'>
        <div><p className='font-semibold text-2xl mb-5'>Programming <br /> Languages</p>
        <ol className='text-gray-500 font-normal list-disc list-inside'>
            <li className='mb-2'>OBJ-C</li>
            <li className='mb-2'>Swift</li>
            <li className='mb-2'>Java</li>
            <li className='mb-2'>Kotlin</li>
            <li className='mb-2'>C#</li>
            <li className='mb-2'>HTML</li>
            <li className='mb-2'>CSS</li>
            <li className='mb-2'>JS</li>
        </ol>
        </div>
        <div><p className='font-semibold text-2xl mb-5'>Environments & <br /> Frameworks</p>
        <ol className='text-gray-500 font-normal list-disc list-inside'>
            <li className='mb-2'>IOS SDK</li>
            <li className='mb-2'>Xcode</li>
            <li className='mb-2'>Andriod Studio</li>
            <li className='mb-2'>Eclipse</li>
            <li className='mb-2'>Xamarin</li>
            <li className='mb-2'>CORDOVA</li>
            <li className='mb-2'>React Native</li>
            <li className='mb-2'>Flutter</li>
        </ol>
        </div>
        <div><p className='font-semibold text-2xl mb-5'>Back-end <br /> Languages</p>
        <ol className='text-gray-500 font-normal list-disc list-inside'>
            <li className='mb-2'>Microsoft .NET</li>
            <li className='mb-2'>Java</li>
            <li className='mb-2'>Python</li>
            <li className='mb-2'>Node</li>
            <li className='mb-2'>PHP</li>
            <li className='mb-2'>GO</li>
            
        </ol>
        </div>
        <div><p className='font-semibold text-2xl mb-5'>Databases & <br /> Storage</p>
        <ol className='text-gray-500 font-normal list-disc list-inside'>
            <li className='mb-2'>SQLite</li>
            <li className='mb-2'>Realm</li>
            <li className='mb-2'>Amazon RDS</li>
            <li className='mb-2'>Amazon S3</li>
            <li className='mb-2'>Amazon REDSHIFT</li>
            <li className='mb-2'>Amazon DocumentDB</li>
            <li className='mb-2'>AWS Elasticache</li>
           
        </ol>
        </div>
      </div>

    </div>
  )
}

export default TechandFram
