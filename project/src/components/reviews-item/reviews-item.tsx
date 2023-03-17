import { Review } from '../../types/reviews';
import { changeInPercent } from '../../utils/utils';

type ReviewsItemProps = {
  review: Review;
}

function ReviewsItem({ review }: ReviewsItemProps): JSX.Element {
  const { date } = review;
  const itemDate = new Date(date);
  const monthName = itemDate.toLocaleString('en-EN', { month: 'long' });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{review.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${changeInPercent(review.score)}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.text}</p>
        <time className="reviews__time" dateTime={`${itemDate.getFullYear()}-${itemDate.getMonth()}-${itemDate.getDate()}`}>{monthName} {itemDate.getFullYear()}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
