import React from 'react'

const HeaderSecondary = ({title}) => {
  return (
    <div
        class="container-fluid page-header pt-5 pb-2 mb-5 wow fadeIn mt-md-5"
        data-wow-delay="0.1s"
      >
        <div class="container text-center">
          <h1 class="display-4 text-white animated slideInDown mb-4 mt-5">
            {title}
          </h1>
          
        </div>
      </div>
  )
}

export default HeaderSecondary