import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="py-16 bg-primary-100">
      <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident fugit ipsa ut praesentium inventore aspernatur, vel veritatis repellendus minus voluptas, sit temporibus voluptate eveniet amet corrupti fugiat, optio accusantium? Aliquid?
          </p>
          <p>© Evogym All Rights Reserved</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h3 className="font-bold">Links</h3>
          <p className="my-5">Lorem ipsum dolor sit</p>
          <p className="my-5">Lorem ipsum dolor sit</p>
          <p>Lorem ipsum dolor sit</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h3 className="font-bold">Contact Us</h3>
          <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque quaerat sunt dicta rem ipsum tenetur alias.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer