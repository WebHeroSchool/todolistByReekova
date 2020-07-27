import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		user: [],
		isError: false,
		error: ''
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: 'mariarykova'
		}).then(({ data }) => {
			this.setState ({
				repoList: data,
				isLoading: false
			})
		})
		.catch(error => {
			this.setState({
				isLoading: false,
				isError: true,
				error: "Пользователь не найден"
			});
		});

		octokit.users.getByUsername({
            username: 'mariarykova'
        }).then(({ data }) => {
            this.setState({
                user: data,
                isLoading: false
            });
        })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    isError: true,
                    error: "Пользователь не найден"
                });
            });
	}

	render() {
		const { isLoading, repoList, user, isError, error } = this.state;
		return (
			<CardContent>
			{isLoading
				? <CircularProgress />
				: <div className={styles.wrapper}>
						<img src={user.avatar_url} className={styles.avatar}/>
						<h3 className={styles.login}> {user.login} </h3>
						<p className={styles.title}>Мои репозтории:</p>
							<ol>
							{repoList.map(repo => (<li key={repo.id} className={styles.list}>
								<a href={repo.html_url} className={styles.link}>{repo.name}</a>
							</li>))}
							</ol>
					</div>
					}
				{isError && {error}}
			</CardContent>
		);
	};
}

export default About;
