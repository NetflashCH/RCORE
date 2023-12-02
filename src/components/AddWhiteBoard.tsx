import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { pushData } from '../store/Data'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const AddWhiteBoard = () => {
  const [readOnly, setReadOnly] = useState<boolean>(false)
  const [ace, setAce] = useState<boolean>(false)
  const [id, setId] = useState<string>('')
  const [interactionValue, setInteractionValue] = useState<string>('')
  const [model, setModel] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [jobs, setJobs] = useState<string>('')
  const [grades, setGrades] = useState<string>('')

  const [idNotValid, setIdNotValid] = useState<string>('')
  const [interactionValueNotValid, setInteractionValueNotValid] =
    useState<string>('')
  const [modelNotValid, setModelNotValid] = useState<string>('')
  const [UrlNotValid, setUrlNotValid] = useState<string>('')

  const router = useNavigate()

  const dispatch = useDispatch()

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (id && interactionValue && model && url && jobs && grades) {
      dispatch(
        pushData({
          name: id,
          model: model,
          url: url,
          position: {
            x: 4120.0,
            y: -1016.0,
            z: -1016.0,
          },
          readonly: readOnly,
          ace: ace,
          jobs: jobs,
          grades: grades,
          interactionDistance: interactionValue,
        })
      )

      setReadOnly(false)
      setAce(false)
      setId('')
      setInteractionValue('')
      setModel('')
      setUrl('')
      setJobs('')
      setGrades('')
      router('/')
    }
  }

  const readOnlyHandler = () => setReadOnly(!readOnly)
  const aceHandler = () => setAce(!ace)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='w-[1090.2px] overflow-hidden px-4'
    >
      <form
        className='grid gap-[1.3rem] h-full '
        onSubmit={submitHandler}
      >
        <div className='flex items-center justify-between'>
          <div className='input'>
            <label htmlFor='id'>ID</label>
            <input
              id='id'
              type='text'
              value={id}
              placeholder='e.g. Police_Office_Boss_One'
              className={`${
                idNotValid === 'wrong'
                  ? 'wrong'
                  : idNotValid === 'correct'
                  ? 'correct'
                  : ''
              }`}
              onChange={(e) => {
                setId(e.currentTarget.value)

                e.currentTarget.value === ''
                  ? setIdNotValid('wrong')
                  : setIdNotValid('correct')
              }}
            />
          </div>

          <div className='input'>
            <label htmlFor='text'>Interaction Distance</label>
            <input
              id='text'
              type='text'
              value={interactionValue}
              placeholder='e.g. 2'
              className={`${
                interactionValueNotValid === 'wrong'
                  ? 'wrong'
                  : interactionValueNotValid === 'correct'
                  ? 'correct'
                  : ''
              }`}
              onChange={(e) => {
                setInteractionValue(e.currentTarget.value)

                e.currentTarget.value === ''
                  ? setInteractionValueNotValid('wrong')
                  : setInteractionValueNotValid('correct')
              }}
            />
          </div>
        </div>

        <div className='input'>
          <label htmlFor='whiteboard'>Board Model</label>
          <input
            id='whiteboard'
            type='text'
            value={model}
            placeholder='e.g. recore-prop-whiteboard-large'
            className={`!w-[960px] ${
              modelNotValid === 'wrong'
                ? 'wrong'
                : modelNotValid === 'correct'
                ? 'correct'
                : ''
            }`}
            onChange={(e) => {
              setModel(e.currentTarget.value)

              e.currentTarget.value === ''
                ? setModelNotValid('wrong')
                : setModelNotValid('correct')
            }}
          />
        </div>

        <div className='input'>
          <label htmlFor='url'>URL (optional)</label>
          <input
            id='url'
            type='text'
            value={url}
            placeholder='e.g. google.com'
            className={`!w-[960px] ${
              UrlNotValid === 'wrong'
                ? 'wrong'
                : UrlNotValid === 'correct'
                ? 'correct'
                : ''
            }`}
            onChange={(e) => {
              setUrl(e.currentTarget.value)

              e.currentTarget.value === ''
                ? setUrlNotValid('wrong')
                : setUrlNotValid('correct')
            }}
          />
        </div>

        <div className='flex items-center justify-between'>
          <div className='input flex-[.25] '>
            <label htmlFor='read'>Read Only</label>
            <button
              type='button'
              onClick={() => readOnlyHandler()}
              className={`p-2 ${
                !readOnly ? 'bg-red-600' : 'bg-green-700'
              } w-[150px] rounded-lg text-[1.1rem] capitalize font-semibold !text-[#282B43] transition`}
            >
              {`${readOnly}`}
            </button>
          </div>
          <div className='input'>
            <label htmlFor='ace'>Use Ace Permissions</label>
            <button
              type='button'
              onClick={() => aceHandler()}
              className={`p-2 ${
                !ace ? 'bg-red-600' : 'bg-green-700'
              } w-[150px] rounded-lg text-[1.1rem] capitalize font-semibold !text-[#282B43] transition`}
            >
              {`${ace}`}
            </button>
          </div>
        </div>

        <div className='grid gap-[1.5rem]'>
          <div className='input'>
            <label htmlFor='jobs'>
              Jobs (Optional, split by comma without spaces)
            </label>
            <input
              id='jobs'
              type='text'
              className='!w-[960px]'
              value={jobs}
              placeholder='Nothing'
              onChange={(e) => setJobs(e.currentTarget.value)}
            />
          </div>
          <div className='input'>
            <label htmlFor='grades'>Grades (optional) </label>
            <input
              id='grades'
              type='text'
              className='!w-[960px]'
              value={grades}
              placeholder='Nothing'
              onChange={(e) => setGrades(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className='flex items-center justify-between  pr-[1.2rem]'>
          <button
            type='submit'
            className='px-6 py-3 text-md w-[240px]  text-[1.1rem] font-bold !text-[#282B43] bg-[#F29E20] rounded-lg'
          >
            Apply
          </button>
          <button
            type='button'
            onClick={() => {
              router('/')
              const els = document.querySelectorAll('.link')
              els.forEach((_) => _.classList.remove('active'))
              els[0].classList.add('active')
            }}
            className='px-6 py-3 text-md w-[240px]  text-[1.1rem] font-bold !text-[#282B43]  bg-[#f22020] rounded-lg mr-[.2rem]'
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.section>
  )
}

export default AddWhiteBoard
