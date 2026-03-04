export interface ReviewCardProps {
    author: string;
    course: string;
    authorImgSrc?: string;

    review: string;

    rating: string
    id?: string;
}

export interface GetReviewsResponse{
    items: ReviewCardProps[]
}