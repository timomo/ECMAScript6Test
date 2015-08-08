/**
 * Created by timomo on 2015/08/07.
 */
var uniqueId = function(prefix) {
    return prefix + 1;
};

var AnswerRadioInput = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool
    },
    getDefaultProps: function() {
        return {
            id: null,
            checked: false
        };
    },
    getInitialState: function() {
        return {
            checked: !!this.props.checked,
            id: this.props.id ? this.props.id : uniqueId('radio-')
        };
    },
    render: function() {
        return (
            <div className="radio">
                <label htmlFor={this.state.id}>
                    <input type="radio"
                           name={this.props.name}
                           id={this.state.id}
                           value={this.props.value}
                           checked={this.state.checked} />
                    {this.props.label}
                </label>
            </div>
        );
    }
});
