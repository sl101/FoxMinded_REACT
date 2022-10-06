import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import style from './FormPost.module.scss';
import { inputPostAPI } from '../redux/actions/posts';

export const FormPost = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    dispatch(inputPostAPI(data));
    reset();
  };

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={style.label}>
          {/* User ID */}
          <input
            className={clsx(style.input, style.inputId, {
              [style.errorShadow]: errors?.userId
            })}
            {...register('userId', {
              required: 'Required field',
              pattern: {
                value: /^\d+$/,
                message: 'Has to be number'
              }
            })}
            placeholder="user id"
          />
          <div className={style.error}>
            {errors?.userId && (
              <p className={style.errorMessage}>{errors?.userId?.message}</p>
            )}
          </div>
        </label>
        <label className={style.label}>
          <input
            className={clsx(style.input, style.inputTitle, {
              [style.errorShadow]: errors?.title
            })}
            {...register('title', {
              required: 'Required field',
              minLength: {
                value: 3,
                message: 'Minimum 3 characters'
              }
            })}
            placeholder="title"
          />
          <div className={style.error}>
            {errors?.title && (
              <p className={style.errorMessage}>{errors?.title?.message}</p>
            )}
          </div>
        </label>
        <label className={style.label}>
          <textarea
            className={clsx(style.input, style.inputArea, {
              [style.errorShadow]: errors?.body
            })}
            {...register('body', {
              required: 'Enter your message',
              minLength: {
                value: 3,
                message: 'Minimum 3 characters'
              }
            })}
            placeholder="message"
          />
          <div className={style.error}>
            {errors?.body && (
              <p className={style.errorMessage}>{errors?.body?.message}</p>
            )}
          </div>
        </label>
        <input
          className={clsx(style.button, style.input, {
            [style.valid]: isValid
          })}
          type="submit"
          disabled={!isValid}
          value="Add message"
        />
      </form>
    </div>
  );
};
