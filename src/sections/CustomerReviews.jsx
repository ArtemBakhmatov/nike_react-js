import ReviewCard from "../components/ReviewCard";
import { reviews } from '../constants';

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center text-4xl font-bold dark:text-slate-50">
                What Our
                <span className="text-coral-red"> Customers </span>
            </h3>
            <p className="m-auto mt-4 max-w-lg  text-center info-text dark:text-slate-200">
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.
            </p>

            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                { reviews.map((review, i) =>
                    <ReviewCard 
                        key={ i }
                        imgURL={ review.imgURL }
                        customerName={ review.customerName }
                        rating={ review.rating }
                        feedback={ review.feedback }
                    />
                )}
            </div>
        </section>
    );
};

export default CustomerReviews;