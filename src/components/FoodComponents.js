import React from 'react';
import '../scss/foodComponents.scss'
// import '../node_modules/font-awesome/css/font-awesome.min.css';




const FoodComponents = () => {
    return (
        <div className="background">
            <div className="food__components">
                <div className="food__components__frame">
                    <div className="box">
                        <h3>BMR</h3>
                        <p>Podstawowa przemiana materii, czyli to ile potrzebujemy kalorii, żeby organizm mógł przeprowadzić podstawowe funkcje fizjologiczne. Tyle energii zużywalibyśmy, jeśli cały czas leżeli w bezruchu</p>
                        <i className="fas fa-bed"/>
                    </div><div className="box">
                        <h3>NEAT</h3>
                        <p>Termogeneza związana z pozatreningową aktywnością fizyczną. To wszelkie wydatki związane z aktywnością niezaplanowaną np. sprzątanie, kroki, gestykulacja, tupanie nogą</p>
                        <i className="fas fa-shoe-prints"/>
                    </div><div className="box">
                        <h3>TEF</h3>
                        <p>Efekt termiczny pożywnienia, czyli kalorie, których potrzebujemy na przetworzenie spożywanych produktów na energię. Obejmuje to cały proces rozdrabniania, trawienia, wchłaniania, trasportu i wydalenia</p>
                        <i className="fas fa-apple-alt"/>
                    </div><div className="box">
                        <h3>EAT</h3>
                        <p>Termogeneza planowanej aktywności fizycznej, czyli kalorie przepalone na zaplanowaną aktywność fizyczną np. trening na siłowni, bieganie, jazda na rolkach, gra w piłkę itd.</p>
                        <i className="fas fa-dumbbell"/>
                    </div><div className="box">
                        <h3>EPOC</h3>
                        <p>Powysiłkowa konsumpcja tlenu. Wydatek energetyczny  na spłacenie tzw. długu tlenowego zaciągniętego podczas wysiłku fizycznego. U osób zaawansowanych nie występuję on w stopniu istotnym a u początkujących wartości te są bardzo małe</p>
                        <i className="fas fa-lungs"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FoodComponents;