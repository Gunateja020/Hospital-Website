import Operation from './images/operation.jpg';
import Discuss from './images/discuss.jpg';
import Doc from './images/lapdoc.jpg';

export default function News() {
    return (
        <>
            <h2 class="service">News</h2>
            <div class="container mt-3 mb-3">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <img src={Operation} height="250px" alt="News" class="card-img" />
                            <div class="card-body">
                                <h5 class="card-title">Latest Blog Post</h5>
                                <p class="card-text">
                                    There are many variations passages available, but the lorem, ipsum sit have suffered alteration
                                </p>
                                <a href="#" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img src={Discuss} height="250px" alt="New Articles" class="card-img" />
                            <div class="card-body">
                                <h5 class="card-title">Latest Blog Post</h5>
                                <p class="card-text">
                                    There are many variations passages available, but the lorem, ipsum sit have suffered alteration
                                </p>
                                <a href="#" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <img src={Doc} height="250px" alt="News" class="card-img" />
                            <div class="card-body">
                                <h5 class="card-title">Latest Blog Post</h5>
                                <p class="card-text">
                                    There are many variations passages available, but the lorem, ipsum sit have suffered alteration
                                </p>
                                <a href="#" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};