import React from "react";
import { CaretRight } from "../../assets";

export const WIP = () => {
return (
    <div className="not-found">
        <section className="scroll-wrapper">
            <div className="scroll">
                {Array(10).fill(<h1>Whoops!</h1>)}
            </div>
            <div className="scroll bottom">
                {Array(10).fill(<h1>Development In Progress!</h1>)}
            </div>
        </section>

        <div className="content">
            <div className="desc">
                This page is currently under development.
                <br /> Please check back later...
            </div>

            <div className="cta">
                <div className="cta-icon">
                    <CaretRight />
                </div>
                <a href="/">Back to home</a>
            </div>
        </div>
    </div>
);
};
