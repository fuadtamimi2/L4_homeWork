import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

function Form1() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const emailValue = watch('email')

    const onSubmit = (data) => {
        delete data.email2
        console.log(data)
        reset()
        toast.success('Form submitted successfully')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7">
                <div className="card shadow-sm border-0">
                    <div className="card-body p-4">
                        <h2 className="h4 mb-4">Form Page</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register('fullName', {
                                        required: 'Name is required',
                                        minLength: {
                                            value: 2,
                                            message: 'Name must be at least 2 characters',
                                        },
                                    })}
                                />
                                {errors.fullName && <small className="text-danger">{errors.fullName.message}</small>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register('phone', {
                                        required: 'Phone is required',
                                        minLength: {
                                            value: 9,
                                            message: 'Phone must be at least 9 characters',
                                        },
                                    })}
                                />
                                {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email Again</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    {...register('email2', {
                                        required: 'Please type email again',
                                        validate: (value) => value === emailValue || 'Emails do not match',
                                    })}
                                />
                                {errors.email2 && <small className="text-danger">{errors.email2.message}</small>}
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Email is not valid',
                                        },
                                    })}
                                />
                                {errors.email && <small className="text-danger">{errors.email.message}</small>}
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form1
