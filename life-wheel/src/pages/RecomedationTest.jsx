import { useState } from 'react'
import { nameCategory } from '../data'
import {
  useSaveRecomendationMutation,
  useGetRecomendationQuery,
} from '../slices/apiSlice'

export default function RecomendationTest({ closeRecomendations }) {
  const { data, isLoading, error } = useGetRecomendationQuery()
  const [saveRecomendations] = useSaveRecomendationMutation()

  const onSaveHandler = async () => {
    await saveRecomendations(data)
    closeRecomendations()
  }

  const onDeleteHandler = async () => {
    await saveRecomendations()
    closeRecomendations()
  }

  if (isLoading) {
    return (
      <div className="mb-5">
        <p className="text-primary">Генерируем рекомендации...</p>
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  } else {
    const { summary, weak_areas, growth_areas, strong_areas } =
      data.recomendations
    return (
      <div>
        <h2 className="mb-4">Рекомендации от ИИ по Вашим результатам🎯</h2>
        <div className="mb-5">
          <h3 className="mb-3">Общее заключение:</h3>
          <p>{summary}</p>
        </div>
        <div className="mb-5 shadow">
          {weak_areas.length > 0 && (
            <div className="p-5 bg-danger bg-opacity-10">
              <h3 className="mb-5">Слабо:</h3>
              {weak_areas.map((item) => (
                <div key={item.category}>
                  <h5 className="mb-3">{nameCategory(item.category)}</h5>
                  <p>{item.advice}</p>
                </div>
              ))}
            </div>
          )}
          {growth_areas.length > 0 && (
            <div className="p-5 bg-warning bg-opacity-10">
              <h3 className="mb-5">Средне:</h3>
              {growth_areas.map((item) => (
                <div key={item.category}>
                  <h5 className="mb-3">{nameCategory(item.category)}</h5>
                  <p>{item.advice}</p>
                </div>
              ))}
            </div>
          )}
          {strong_areas.length > 0 && (
            <div className="p-5 bg-success bg-opacity-10">
              <h3 className="mb-5">Сильно:</h3>
              {strong_areas.map((item) => (
                <div key={item.category}>
                  <h5 className="mb-3">{nameCategory(item.category)}</h5>
                  <p>{item.advice}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="d-flex flex-column gap-3">
          <button
            className="btn btn-outline-primary mb-3"
            onClick={onSaveHandler}>
            Сохранить рекомендации
          </button>
          <button
            className="btn btn-outline-danger mb-3"
            onClick={onDeleteHandler}>
            Удалить рекомендации
          </button>
        </div>
      </div>
    )
  }
}
