import { Component } from "react";

class Sentakusi extends Component{
    constructor(props){
        render(
            <div>
                <h1 style={this.appTitleStyle}>クイズアプリ</h1>
                <div style={this.quizAreaStyle}>
                <Mondai title = "Q1.岩手県の県庁所在地はどこですか?" />
                <Sentakusi label="宮古"/>
                <Sentakusi label="盛岡"/>
                <Sentakusi label="仙台"/>
                <Sentakusi label="花巻"/>
                </div>
            </div>
        );
    }
}
export default Sentakusi;