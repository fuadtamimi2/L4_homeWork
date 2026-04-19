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
    const passwordValue = watch('password', '')

    const getPasswordStrength = () => {
        if (!passwordValue) return ''
        if (passwordValue.length <= 2) return 'Weak'
        if (passwordValue.length <= 6) return 'Medium'
        return 'Strong'
    }

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
                        <h2 className="h4 mb-4">Sign Up Form</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register('name', {
                                        required: 'Name is required',
                                        minLength: {
                                            value: 2,
                                            message: 'Name must be at least 2 characters',
                                        },
                                    })}
                                />
                                {errors.name && <small className="text-danger">{errors.name.message}</small>}
                            </div>

                            <div className="mb-3">
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

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    {...register('password', {
                                        required: 'Password is required',
                                    })}
                                />
                                {errors.password && <small className="text-danger">{errors.password.message}</small>}
                            </div>

                            {passwordValue && (
                                <div className="mb-4">
                                    <small className="fw-bold">
                                        Password strength: {getPasswordStrength()}
                                    </small>
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary">
                                SIGN UP
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form1