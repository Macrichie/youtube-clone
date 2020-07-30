import React from 'react'
import './RecommendedVideos.css'

export default function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div class="recommendedVideos__videos">
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
            </div>
        </div>
    )
}
