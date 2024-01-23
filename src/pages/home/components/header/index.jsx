import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useState } from 'react'
import ProductsContext from '../../../../../contexts/Products'

const index = () => {
  const { createModal, setCreateModal } = useContext(ProductsContext)

  const [product, setProduct] = useState({
    barcode: '',
    description: '',
    category: '',
    subcategory: '',
    price: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes realizar la lógica para añadir el producto, por ejemplo, enviar los datos a un servidor.
    console.log('Producto añadido:', product)
    // También puedes reiniciar el estado del formulario después de enviar los datos.
    setProduct({
      barcode: '',
      description: '',
      category: '',
      subcategory: '',
      price: '',
    })
  }

  return (
    <>
      <AnimatePresence>
        {createModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 top-0 z-30 flex items-center justify-center"
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md rounded-2xl bg-base-100 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800">
                      Añadir producto
                    </h2>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-2">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Código de barras</span>
                    <span className="label-text-alt">
                      <div className="tooltip tooltip-right" data-tip="">
                        <button
                          type="button"
                          className="btn btn-circle btn-ghost btn-xs"
                        >
                          <InformationCircleIcon className="size-5" />
                        </button>
                      </div>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="barcode"
                    value={product.barcode}
                    placeholder="Type here"
                    onChange={handleChange}
                    className="input input-bordered w-full focus:outline-none"
                  />
                  <div className="label">
                    <span className="label-text-alt">
                      <input type="checkbox" className="toggle toggle-sm" />
                    </span>
                    <span className="label-text-alt">
                      <div
                        className="tooltip tooltip-right"
                        data-tip="Generar código de barras para el producto"
                      >
                        <button
                          type="button"
                          className="btn btn-circle btn-ghost btn-xs"
                        >
                          <InformationCircleIcon className="size-5" />
                        </button>
                      </div>
                    </span>
                  </div>
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Descripción</span>
                    <span className="label-text-alt">
                      <div className="tooltip tooltip-right" data-tip="">
                        <button
                          type="button"
                          className="btn btn-circle btn-ghost btn-xs"
                        >
                          <InformationCircleIcon className="size-5" />
                        </button>
                      </div>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="description"
                    value={product.description}
                    placeholder="Type here"
                    onChange={handleChange}
                    className="input input-bordered w-full focus:outline-none"
                  />
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Categoría</span>
                    <span className="label-text-alt">
                      <div className="tooltip tooltip-right" data-tip="">
                        <button
                          type="button"
                          className="btn btn-circle btn-ghost btn-xs"
                        >
                          <InformationCircleIcon className="size-5" />
                        </button>
                      </div>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="category"
                    value={product.category}
                    placeholder="Type here"
                    onChange={handleChange}
                    className="select select-bordered w-full focus:outline-none"
                  />
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Subcategoría</span>
                    <span className="label-text-alt">
                      <div className="tooltip tooltip-right" data-tip="">
                        <button
                          type="button"
                          className="btn btn-circle btn-ghost btn-xs"
                        >
                          <InformationCircleIcon className="size-5" />
                        </button>
                      </div>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="subcategory"
                    value={product.subcategory}
                    placeholder="Type here"
                    onChange={handleChange}
                    className="input input-bordered w-full focus:outline-none"
                  />
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Precio</span>
                    <span className="label-text-alt">
                      <div className="tooltip tooltip-right" data-tip="">
                        <button
                          type="button"
                          className="btn btn-circle btn-ghost btn-xs"
                        >
                          <InformationCircleIcon className="size-5" />
                        </button>
                      </div>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    value={product.price}
                    placeholder="Type here"
                    onChange={handleChange}
                    className="input input-bordered w-full focus:outline-none"
                  />
                </label>

                <div className="flex items-center justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setCreateModal(false)}
                    className="btn"
                  >
                    Descartar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Guardar cambios
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default index
